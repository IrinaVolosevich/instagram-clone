import {v4 as uuid} from "uuid";

export const defaultUser = {
    id: uuid(),
    username: "iri.volosevich",
    name: "name",
    profile_image:
        "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/93905695_222231809108128_1549151045324636160_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=Yp6vKbwi7h4AX_2dlBO&oh=d5126e258d391357b85f6b20504d5f65&oe=5ECE509B"
    // profile_image:
    //
};

export function getDefaultUser() {
    return {
        id: uuid(),
        username: "username",
        name: "name",
        profile_image:
            "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/93905695_222231809108128_1549151045324636160_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=Yp6vKbwi7h4AX_2dlBO&oh=d5126e258d391357b85f6b20504d5f65&oe=5ECE509B"
    };
}

export const defaultPost = {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
        "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/62267794_2381558942163747_7182528724735806000_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=VCC0Q23POUQAX_R9q11&oh=5769164d0b8a13fa7b24740afa8bd83c&oe=5ECBE51F",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00"
};

export function getDefaultPost() {
    return {
        id: uuid(),
        likes: 10,
        caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
        user: defaultUser,
        media:
            "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/62267794_2381558942163747_7182528724735806000_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=VCC0Q23POUQAX_R9q11&oh=5769164d0b8a13fa7b24740afa8bd83c&oe=5ECBE51F",
        comments: [],
        created_at: "2020-02-28T03:08:14.522421+00:00"
    };
}

export const defaultNotifications = [
    {
        id: uuid(),
        type: "follow",
        user: defaultUser,
        created_at: "2020-02-29T03:08:14.522421+00:00"
    },
    {
        id: uuid(),
        type: "like",
        user: defaultUser,
        post: defaultPost,
        created_at: "2020-02-29T03:08:14.522421+00:00"
    }
];

export const defaultCurrentUser = {
    id: uuid(),
    username: "iri.volosevich",
    name: "Девушка-программист👩‍💻",
    profile_image:
        "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/93905695_222231809108128_1549151045324636160_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=Yp6vKbwi7h4AX_2dlBO&oh=d5126e258d391357b85f6b20504d5f65&oe=5ECE509B",
    website: "https://vk.com/id124916956",
    email: "me@gmail.com",
    bio: "Backend developer",
    phone_number: "555-555-5555",
    posts: Array.from({length: 287}, () => getDefaultPost()),
    followers: Array.from({length: 1223}, () => getDefaultPost()),
    following: Array.from({length: 363}, () => getDefaultPost())
};
