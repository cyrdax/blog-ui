export interface User {
    id: number;
    name: string;
    email: string;
    picture: string;
    bio: string;
    created_at: string;
    updated_at: string;
    posts: Post[];
}

export interface Post {
    id: number;
    subject: string;
    post_text: string;
    picture: string;
    created_at: string;
    updated_at: string;
    user_id: number;
    links: Link[];
}

export interface Link {
    id: number;
    link_name: string;
    link_url: string;
    picture: string;
    created_at: string;
    updated_at: string;
}
