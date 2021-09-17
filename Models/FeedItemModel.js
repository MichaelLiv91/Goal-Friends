class FeedItemModel
{
    constructor(id, ownerID, title, content, date)
    {
        this.id = id;
        this.ownerID = ownerID
        this.title = title;
        this.content = content;
        this.date = new Date(date)
    }
}

export default FeedItemModel