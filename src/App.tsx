import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Container, Row, Col } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';

function App() {

	const [notes, setNotes] = useState<Note[]>([
		{
			id: new Date().toString(),
			title: 'Meetings',
			text: 'schedule meeting for ReactJS',
			color: 'pink',
			date: new Date().toString(),
		},
	]);
	return (
		<div className="App">
			<Header />
			<Container>
				<Row>
					<Col>
						<NotesList notes={notes} setNotes={setNotes} />
					</Col>
				</Row>
				<Row >
					<Col>
						<CreateNotes notes={notes} setNotes={setNotes} />
					</Col>
				</Row>
			</Container>
			
		</div>
	);
}

export default App;
