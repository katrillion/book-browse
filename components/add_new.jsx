import React, { Component } from 'react';

export default class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      genre: 'novel',
      thumbnail: '',
      releaseDate: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleGenre = this.toggleGenre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  }

  toggleGenre(event) {
    this.setState({ genre: event.target.value });
  }

  handleSubmit(event) {
    //event.preventDefault();
    this.props.onAddTitle(this.state);
  }

  render() {

    return (
      <form className="m-5" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="author" className="col-sm-3 col-form-label">Author</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="author" name="author" placeholder="Author" value={this.state.author} onChange={this.handleChange} />
          </div>
        </div>

        <div className="custom-control custom-radio custom-control-inline mb-3">
          <input type="radio" id="novel" className="custom-control-input" value="novel" checked={this.state.genre==='novel'} onChange={this.toggleGenre} />
          <label className="custom-control-label" htmlFor="novel">Novel</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline mb-3">
          <input type="radio" id="non-fiction" className="custom-control-input" value="non-fiction" checked={this.state.genre==='non-fiction'}  onChange={this.toggleGenre} />
          <label className="custom-control-label" htmlFor="non-fiction">Non-fiction</label>
        </div>

        <div className="form-group row mt3">
          <label htmlFor="thumbnail" className="col-sm-3 col-form-label">Thumbnail</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="thumbnail" name="thumbnail" placeholder="Thumbnail Image URL" value={this.state.thumbnail} onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="releaseDate" className="col-sm-3 col-form-label">Release Date</label>
          <div className="col-sm-9">
            <input type="date" className="form-control" id="releaseDate" name="releaseDate" placeholder="Release Date" value={this.state.releaseDate} onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
          <div className="col-sm-9">
            <textarea className="form-control" id="description" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <button type="submit">
              Add New Title
            </button>
          </div>

          <div className="col-sm-9">
            <p><small>For best results, please fill in every field</small></p>
          </div>
        </div>        
      </form>

    );
  }
}