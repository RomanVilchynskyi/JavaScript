import { Post } from "./post.js";

let post = new Post("Lorem ipsum dolor", "sit amet consectetur, adipisicing elit. Asperiores nisi placeat cupiditate, vel repellat quis, et iste mollitia porro reiciendis repudiandae! Dolorem aut fuga nesciunt dicta et ipsa minima temporibus.Inventore officia nesciunt necessitatibus in, molestias quis perspiciatis nulla assumenda. Eius, obcaecati quis? Dicta nostrum pariatur quisquam ratione necessitatibus?");

// document.writeln(post.get());
document.body.innerHTML = post.get();


