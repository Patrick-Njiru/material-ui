import { Button } from "@mui/material"
import { AddCircle, Settings } from "@mui/icons-material"

const App = () => {
	return (
		<div>
			<Button variant='text'>Text</Button>
			<Button variant='contained' disabled>
				Contained
			</Button>
			<Button variant='contained' color='secondary' size='small' endIcon={<Settings />}>
				Settings
			</Button>
			<br />
			<br />
			<Button variant="outlined" startIcon={<AddCircle />} color='success'>
				Add new post
			</Button>
			<Button disabled>Disabled</Button>
			<Button href='#text-buttons'>Link</Button>
		</div>
	)
}

export default App
