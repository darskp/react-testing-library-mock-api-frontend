import '../styles/addbook.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../../src/images/hero1.png'

const Addbooks = () => {
    let navigate = useNavigate();
    let [title, setTitle] = useState('');
    let [authors, setAuthors] = useState('');
    let [categories, setCategories] = useState('');
    let [pageCount, setPageCount] = useState(null);
    let [shortDescription, setShortDescription] = useState('');
    let [thumbnailUrl, setThumbnailUrl] = useState('');

    let handlesubmit = e => {
        e.preventDefault(); 
        let bookdata = { title, authors, categories, pageCount, shortDescription, thumbnailUrl };
        console.log("Book data",bookdata)
        alert("Book Data added succefully");
        navigate('/book-list');
    }
    
    const isEdit=false;
    return (
        <div className='mainadd'>
            <div className="itemadd">
                <h1 className='addtitle'>{isEdit ? 'Edit ' : 'Add ' } a Book</h1>
                <div className='container'>
                    <div className="form_image heropageright user-link">
                        <img src={hero} className="heroimg" alt="hero-img" />
                    </div>
                    <div className="form">
                        <form action="" onSubmit={handlesubmit}>
                            <div className="title-add">
                                <input value={title} onChange={e => setTitle(e.target.value)} required type="text" placeholder="Enter the title" />
                            </div>
                            <div className="authors">
                                <input value={authors} onChange={e => setAuthors(e.target.value)} required type="text" placeholder="Enter the authors" />
                            </div>
                            <div className="categories">
                                <input value={categories} onChange={e => setCategories(e.target.value)} type="text" placeholder="Enter the categories" />
                            </div>
                            <div className="pageCount">
                                <input value={pageCount} onChange={e => setPageCount(e.target.value)} type="number" min="0" placeholder="Enter the page count" />
                            </div>
                            <div className="Description">
                                <textarea className="inputtextarea shortDescription" value={shortDescription} onChange={e => setShortDescription(e.target.value)} placeholder="Enter the short description"></textarea>
                            </div>
                            <div className="thumbnailUrl">
                                <input value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)} type="text" placeholder="Enter the thumbnail url" />
                            </div>
                            <div className='booklistbtns btn'>
                                <button className="booklistbtn">{isEdit ? 'Edit ' : 'Add '} Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addbooks;