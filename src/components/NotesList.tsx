import React from 'react';

import { Note } from '../models/note';
import Notes from './Notes';
type NoteProps = {
	notes: Note[];
	setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NotesList = ({ notes, setNotes }: NoteProps) => {
	const handleDelete = (id: string) => {
		setNotes(notes.filter((note) => note.id !== id));
	};
	const renderNotes = () =>
		notes.map((note) => (
			<Notes key={note.id} note={note} handleDelete={handleDelete} />
		));
	return (
		<>
			<h2 className="mt-3 ">Notes</h2>
			<div>{renderNotes()}</div>
		</>
	);
};

export default NotesList;
