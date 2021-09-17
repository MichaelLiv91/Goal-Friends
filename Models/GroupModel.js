class GroupModel {
    constructor(id, name, state) {
        this.id = id;
        this.name = name,
        this.dateCreated = new Date(),
        this.particeipants = [];
        this.managers = [];
        this.games = []
        this.picture = 'https://cdn.connectsites.net/static_assets/images/default_medium_group_icon.png'
        this.state = state
    }
}
export default GroupModel