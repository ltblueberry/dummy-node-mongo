const connectionString = process.env.DATABASE_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/play';

const mongoose = require('mongoose');
mongoose.connect(connectionString, {
    useNewUrlParser: true
});

const Element = mongoose.model('element', {
    value: String
});

Element.countDocuments().then(count => {
    if (count != 0) {
        return;
    }
    const placeholders = ['foo', 'bar', 'baz', 'qux'];
    placeholders.forEach(placeholder => {
        const newItem = new Element({
            value: placeholder
        });
        newItem.save()
    });
})

module.exports = {
    Element: Element
};