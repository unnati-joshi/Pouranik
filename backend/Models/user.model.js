import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        titleByYou: {
            type: String,
        },
        notes_bookmarks: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        }
    }, {
        timestamps: true,  //createdAt updatedAt
    }
)

const userSchema = new mongoose.Schema(
    {
        email_id: {
            type: String,
            required: true,
            unique: true,
        },
        books: [bookSchema],
    }, {
        timestamps: true,
    }
)

const User = mongoose.model("User", userSchema);

export default User;