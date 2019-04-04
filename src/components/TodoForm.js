import React, { Component } from 'react'

class TodoForm extends Component {
	constructor(){
		super()
		this.state = {
			title: '',
			responsible: '',
			description: '',
			priority: 'low'
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInput(e){
		const { value, name } = e.target
		this.setState({
			[name] : value
		})
		console.log(this.state)
	}
	handleSubmit(e){
		e.preventDefault()
		this.props.onAddTodo(this.state)
		console.log('sending data...')
	}

	render(){
		return (
			<div className="card">
				<form className="card-body" onSubmit={ this.handleSubmit }>
					<div className="form-group">
						<input type="text" className="form-control" onChange={ this.handleInput } name="title" placeholder="Title" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" onChange={ this.handleInput } name="responsible" placeholder="Responsible" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" onChange={ this.handleInput } name="description" placeholder="Description" />
					</div>
					<div className="form-group">
						<select name="priority" className="form-control" onChange={ this.handleInput }>
							<option>Low</option>
							<option>Medium</option>
							<option>High</option>
						</select>
					</div>
					<div className="form-group text-center">
						<input type="submit" className="btn btn-primary" name="submit" value="Save" />
					</div>
				</form>
			</div>
		)
	}
}
export default TodoForm