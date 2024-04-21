import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { Note } from '../models/note';
type CreateProps = {
	notes: Note[];
	setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const CreateNotes = ({ notes, setNotes }: CreateProps) => {
	const [error, setError] = useState<string>('');
	const titleRef = useRef<HTMLInputElement | null>(null);
	const textRef = useRef<HTMLTextAreaElement | null>(null);
	const colorRef = useRef<HTMLInputElement | null>(null);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (titleRef.current?.value === '' || textRef.current?.value === '') {
			return setError('all fields are mandatory');
		}
		setError('');
		setNotes([
			...notes,
			{
				id: new Date().toString(),
				title: (titleRef.current as HTMLInputElement).value,
				text: (textRef.current as HTMLTextAreaElement).value,
				color: (colorRef.current as HTMLInputElement).value,
				date: new Date().toString(),
			},
		]);
		(titleRef.current as HTMLInputElement).value = '';
		(textRef.current as HTMLTextAreaElement).value = '';
	};
	return (
		<>
			<h2 className='ml-100'>Create Notes</h2>
			{error && <Alert variant="danger">{error}</Alert>}
			<Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
				<Form.Group className="mb-3 " controlId="formBasicTitle">
					<Form.Label >Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the title"
						ref={titleRef}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Text</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your notes.."
						as="textarea"
						rows={3}
						ref={textRef}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label htmlFor="colorInput">Notes Color</Form.Label>
					<Form.Control
						type="color"
						id="colorInput"
						defaultValue="green"
						placeholder="Choose your color"
						ref={colorRef}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default CreateNotes;
