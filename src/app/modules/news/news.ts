export class News {
        id: number;
        title: string;
        subtitle: string;
        body: string;
        createdAt: Date;
        updatedAt: Date;
        main_image: string;
        images: Array<string>;
        tags: Array<string>;
        category: Array<string>
}


// {"title":"natus",
// "subtitle":"eos",
// "main_image":"https:\/\/lorempixel.com\/640\/480\/?50624",
// "content":"Quas repellat consequuntur non facere ipsum quidem.
                //  Porro reiciendis quia doloremque et. Dolores dolores dolorem
                //  ipsa accusantium. Velit temporibus laboriosam nisi expedita
                //   temporibus doloremque qui.",
// "images":"https:\/\/lorempixel.com\/640\/480\/?63740",
// "categories":"odio",
// "created_at":{"date":"2018-04-18 12:02:38.000000","timezone_type":3,"timezone":"UTC"},
// "rating":2.11,
// "href":{" link":"http:\/\/localhost:8000\/api\/news\/1"}
// }