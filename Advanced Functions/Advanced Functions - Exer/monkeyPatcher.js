let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};


function result() {
    const operation = arguments[0]

    if (operation === 'upvote') {
        ++this.upvotes

    } else if (operation === 'downvote') {
        ++this.downvotes

    } else {
        const upvote = this.upvotes
        const downvote = this.downvotes
        const totalVotes = upvote + downvote
        const balance = upvote - downvote

        function raiting() {
            if (totalVotes < 10) return 'new'
            if (upvote > totalVotes * 0.66) return 'hot'
            if (balance >= 0 && totalVotes > 100) return 'controversial'
            if (balance < 0) return 'unpopular'
            return 'new'
        }


        if (totalVotes > 50) {
            const number = Math.ceil(Math.max(upvote, downvote) * 0.25)

            return [upvote + number, downvote + number, balance, raiting()]
        }

        return [upvote, downvote, balance, raiting()]
    }
}

var forumPost = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};

console.log(result.call(forumPost, 'score'));

