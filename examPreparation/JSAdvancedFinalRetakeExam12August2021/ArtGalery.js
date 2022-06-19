class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        }
        let article = this.listOfArticles.find(a => a.articleName == articleName)
        if (article && article.articleModel == articleModel) {
            article.quantity += quantity;
        }
        if (!article || article.articleModel != articleModel) {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        let guest = this.guests.find(g => g.guestName == guestName)
        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 50;
        if (personality == "Vip") {
            points = 500
        } else if (personality == "Middle") {
            points = 250
        }
        this.guests.push({ guestName, points, purchaseArticle: 0 })
        return `You have successfully invited ${guestName}!`

    }
    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(a => a.articleName == articleName)
        if (!article || article.articleModel != articleModel) {
            throw new Error("This article is not found.")
        }
        if (article.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        let guest = this.guests.find(g => g.guestName == guestName)
        if (!guest) {
            return "This guest is not invited."
        }
        let articlePoint = Number(this.possibleArticles[article.articleModel])
        if (guest.points < articlePoint) {
            return "You need to more points to purchase the article."
        }
        guest.points -= articlePoint
        article.quantity -= 1
        guest.purchaseArticle += 1
        return `${guest.guestName} successfully purchased the article worth ${articlePoint} points.`



    }
    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let articles = this.listOfArticles.map(p => `${p.articleModel} - ${p.articleName} - ${p.quantity}`)
            return [
                'Articles information:',
                `${articles.join('\n')}`
            ].join('\n')
        }
        else if (criteria == 'guest') {
            let guestsFinal = this.guests.map(p => `${p.guestName} - ${p.purchaseArticle}`)
            return [
                'Guests information:',
                `${guestsFinal.join('\n')}`
            ].join('\n')
        }
    }

}
