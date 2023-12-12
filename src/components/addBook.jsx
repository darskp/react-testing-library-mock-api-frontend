import '../styles/addbook.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import hero from '../../src/images/hero1.png'
import axios from 'axios';

const Addbooks = ({ isEdit, setIsedit }) => {
    let params = useParams();
    let navigate = useNavigate();
    let [title, setTitle] = useState('');
    let [authors, setAuthors] = useState('');
    let [categories, setCategories] = useState('');
    let [pageCount, setPageCount] = useState(null);
    let [shortDescription, setShortDescription] = useState('');
    let [thumbnailUrl, setThumbnailUrl] = useState('');

    let handlesubmit = async (e) => {
        e.preventDefault();
        let bookdata = { title, authors, categories, pageCount, shortDescription, thumbnailUrl };
        try {
            const response = await axios.post('http://localhost:7000/addbook/', bookdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response?.data) {
                console.log("Book data", bookdata);
                alert(response.message);
                navigate('/book-list');
            } else {
                console.error('Failed to add book data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    let handleUpdate = async (e) => {
        e.preventDefault();
        let bookdata = { title, authors, categories, pageCount, shortDescription, thumbnailUrl };
        try {
            const response = await axios.put(`http://localhost:7000/updatebook/${id}`, bookdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response?.data) {
                console.log("Book data", bookdata);
                alert(response.message);
                setIsedit(false);
                navigate('/book-list');
            } else {
                console.error('Failed to add book data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        let fetchData = async (id) => {
            await axios.get(`http://localhost:7000/getbooks/${id}`)
                .then((dat) => {
                    let {data}=dat;
                    setTitle(data.title)
                    setAuthors(data.authors)
                    setCategories(data.categories)
                    setPageCount(data.pageCount)
                    setShortDescription(data.shortDescription)
                    setThumbnailUrl(data.thumbnailUrl)
                })
                .catch(() => console.log("fetching error"))
        }
        if(isEdit){
            fetchData(params.id);
        }
    }, [isEdit]);


    return (
        <div className='mainadd'>
            <div className="itemadd">
                <h1 className='addtitle'>{isEdit ? 'Edit ' : 'Add '} a Book</h1>
                <div className='container'>
                    <div className="form_image heropageright user-link">
                        <img src={hero} className="heroimg" alt="hero-img" />
                    </div>
                    <div className="form">
                        <form onSubmit={!isEdit? handlesubmit : handleUpdate}>
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