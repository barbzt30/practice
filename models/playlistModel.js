const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Playlist must have a name'],
    },
    description: String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Playlist must have a user']
    },
    tracks: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Track',
        required: [true, 'Playlist must have at least one track']
    }]
})