"use client";
import React, { useState, useEffect } from "react";

const CommentSec = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ id: number; username: string; comment: string }[]>([]);

  // Load comments from local storage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    const parsedComments = savedComments ? JSON.parse(savedComments) : [];
    setComments(parsedComments);
  }, []);

  // Save comments to local storage whenever updated
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() === "" || comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      username,
      comment,
    };

    setComments([newComment, ...comments]);
    setUsername("");
    setComment("");
  };

  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter((item) => item.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comment Section</h2>

      {/* Input Fields */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>

      {/* Display Comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((item) => (
            <div
              key={item.id}
              className="p-4 mb-4 bg-white rounded-lg shadow border border-gray-300"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">
                  {item.username}
                </span>
                <button
                  onClick={() => handleDeleteComment(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Delete
                </button>
              </div>
              <p className="text-gray-600">{item.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSec;
