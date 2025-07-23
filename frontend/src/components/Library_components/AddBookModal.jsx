import { useState, useRef } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddBookModal = ({ isOpen, onClose }) => {
  const [doubt, setDoubt] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const inputFile = useRef(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Post Your Doubt"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 9999,
        },
        content: {
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '500px',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        },
      }}
    >
      <h2 className="text-lg font-bold mb-4">Post Your Doubt</h2>
      <form onSubmit={handleSubmit}> 
        {/* Input field for doubt title */}
        <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Type your doubt title here...'
        className="w-full p-2 border rounded mb-4"
        />
        {/* Textarea for doubt description */}
        <textarea
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          placeholder="Type your doubt description here..."
          className="w-full p-2 border rounded mb-4"
          rows="5"
        ></textarea>

        {/* File Upload Section */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="file"
            ref={inputFile}
            style={{ display: 'none' }}
            accept="image/*"
          />
          <button
            type="button"
            className="flex items-center px-4 py-2 bg-gray-200 rounded shadow-sm hover:bg-gray-300"
          >
            
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 !bg-gray-300 rounded !hover:bg-gray-400 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 !bg-blue-500 text-white rounded hover:!bg-blue-600"
          >
            Post
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AddBookModal
