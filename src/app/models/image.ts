export class Image{
    src: string;
    alt: string;
    title: string;
    caption: string;

    constructor(src: string, alt: string, title:string, caption:string){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.caption = caption;
    }
}