class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }
        else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } else if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }
        this._likes = this._likes.filter(el => el != username)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        let foundcomment = this._comments.find(c => c.id == id);
        if (id == undefined || !foundcomment) {
            let comment = {}

            if (this._comments.length != 0) {
                comment.id = this._comments[this._comments.length - 1].id + 1;
            } else {
                comment.id = 1
            }
            comment.username = username;
            comment.content = content;
            comment.replies = [];
            this._comments.push(comment)
            return `${username} commented on ${this.title}`
        }
        let reply = {}
        let num;
        if (foundcomment.replies.length != 0) {
            num = Number((foundcomment.replies[foundcomment.replies.length - 1].id).split('.')[1])+1
        }
        else {
            num = 1
        }
        reply.id = `${foundcomment.id}.${num}`
        reply.username = username;
        reply.content = content;
        foundcomment.replies.push(reply)
        return "You replied successfully"
    }

    toString(sortingType) {
        if (sortingType == 'asc') {
            this._comments.sort((a, b) => (a.id) - (b.id))
            for (let c of this._comments) {
                c.replies.sort((a, b) => Number(a.id.split('.')[1]) - Number(b.id.split('.')[1]))
            }
        }
        else if (sortingType == 'desc') {
            this._comments.sort((a, b) => (b.id) - (a.id))
            for (let c of this._comments) {
                c.replies.sort((a, b) => (b.id.split('.')[1]) - (a.id).split('.')[1])
            }
        }
        else if (sortingType == 'username') {
            this._comments.sort((a, b) => (a.username).localeCompare(b.username))
            for (let c of this._comments) {
                c.replies.sort((a, b) => (a.username).localeCompare(b.username))
            }
        }
        let com = []
        for (let comment of this._comments) {
            com.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
            for (let reply of comment.replies) {
                com.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
            }
        }
        let result =
            `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
        result += `${com.join('\n')}`
        return result.trim();
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));






