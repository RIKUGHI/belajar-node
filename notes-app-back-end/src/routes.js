import { 
  addNoteHandler, deleteNoteByIdHandler, editNoteByIdHandler, getAllNotesHandler, getNoteByIdHandler } from "./handler.js";

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    // cors lebih spesifik
    options: {
      cors: true
    }
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

export default routes;