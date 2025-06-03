// class PrintMachine
// {
//     constructor(fontsize, fontcolor, fontfamily)
//     {
//         this.fontsize = fontsize;
//         this.fontcolor =fontcolor;
//         this.fontfamily = fontfamily;
//     }
//     print(text)
//     {
//         const style = `style="font-size:${this.fontsize}; color:${this.fontcolor}; font-family:${this.fontfamily};"`;
//         document.write(`<p ${style}>${text}</p>`);
//     }
// }

// const printer = new PrintMachine("20px", "blue", "Arial");
// printer.print("This text is printed by class  PrintMachine");

class News
{
    constructor(title, text, tags, publicationDate)
    {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = new Date(publicationDate);
    }
    formatDate() {
        const now = new Date();
        const diffMls = now - this.publicationDate;
        const diffDays = Math.floor(diffMls / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return "Today";
        } else if (diffDays < 7) {
            return `${diffDays} days ago`;
        } else {
            let day = this.publicationDate.getDate();
            let month = this.publicationDate.getMonth() + 1;
            const year = this.publicationDate.getFullYear();

            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;

            return `${day}.${month}.${year}`;
        }
    }

    print() {
        const formattedDate = this.formatDate();
        const tagsArr = this.tags.map(tag => `#${tag}`).join(' ');

        document.write(`
            <div style="border:1px solid gray; padding:10px; width:400px;">
                <h3>${this.title}</h3>
                <article>${formattedDate}</arcticle>
                <p>${this.text}</p>
                <p>${tagsArr}</p>
            </div>
        `);
    }
}

const news = new News(
    "What is Lorem Ipsum?",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsumhas been the indusry's standard dummy text since the 1500s, when an unknown printer took a gallert of type and scrambled it to make a type specimen book",
    ["lorem", "ipsum", "text"],
    "2025-05-24"
);

news.print();