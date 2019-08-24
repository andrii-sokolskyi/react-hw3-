export class Character {
    url: string;
    name: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: string[];
    books: string[];
    povBooks: string[];
    tvSeries: string[];
    playedBy: string[];
    gender: string;

    constructor(data = {} as Character) {
        this.aliases = data.aliases || [];
    }
};