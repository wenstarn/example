const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const CampGround = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await CampGround.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new CampGround({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'http://source.unsplash.com/collection/484351',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptas sed neque laborum adipisci iste? Voluptatum quam amet eligendi, deleniti at doloremque. Laborum odio veritatis repudiandae, dolores qui enim cupiditate.',
            price
        })
        await camp.save()
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});