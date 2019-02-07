export default class GotServices {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharater)
    };

    getCharacter = async (id) => {
        const charcter = await this.getResource(`/characters/${id}`);
        return this._transformCharater((charcter))
    };

    getAllBooks = async () => {
        const allbooks = await this.getResource(`/books`);
        return allbooks.map(this._transformBook)
    };

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook((book));
    };

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse((house))
    };

    getAllHouses = async (id) => {
        const allhouse = await this.getResource(`/houses`);
        return allhouse.map(this._transformHouse)
    };

    noData = (data) => {
        if (data) {
            return data
        } else {
            return ' no data'
        }
    };

    itemKey = (item) => {
        const reg = /\/([0-9]*)$/;
        return item.url.match(reg)[1]
    };

    _transformCharater = (char) => {
        return {
            id: this.itemKey(char),
            name: this.noData(char.name),
            gender: this.noData(char.gender),
            born: this.noData(char.born),
            died: this.noData(char.died),
            culture: this.noData(char.culture),
        }


    };

    _transformHouse = (house) => {
        return {
            id: this.itemKey(house),
            name: this.noData(house.name),
            region: this.noData(house.region),
            words: this.noData(house.words),
            titles: this.noData(house.titles),
            overlod: this.noData(house.overlod),
            ancestralWeapons: this.noData(house.ancestralWeapons)
        }
    };

    _transformBook = (book) => {
        return {
            id: this.itemKey(book),
            name: this.noData(book.name),
            numberOfPages: this.noData(book.numberOfPages),
            publiser: this.noData(book.publiser),
            released: this.noData(book.released)
        }
    }

}
