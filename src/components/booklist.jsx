import { useEffect, useState } from "react";
import '../styles/booklist.css';
import { useNavigate, useLocation } from "react-router-dom";
import remove from '../../src/images/remove32.png'
import edit from '../../src/images/edit.png'
import axios from "axios";

const Booklist = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let [books, setBooks] = useState([]);


    useEffect(() => {
        let fetchData = async () => {
            let data = await axios.get('http://localhost:7000/getbooks');
            setBooks(data.data);
        }
        fetchData();
    }, [books]);



    let readmore = (id) => {
        if (id) {
            navigate(`/books/${id}`);
        }
    }
    let handleclick = (id, title) => {
        // fetch(`http://localhost:3000/books/${id}`, {
        //     method: 'DELETE'
        // });
        alert(`${title} will be deleted permanently`);
    }
    let handleeditclick = (id, title) => {
        // fetch(`http://localhost:3000/books/${id}`, {
        //     method: 'DELETE'
        // });
    }

    return (
        <div className="booklist" >
            <div className="main addmain">
                <h1>Book List ({books.length})</h1>
                <div className="section">
                    {
                        books.map((data, index) =>
                            <div className="bookcard" key={index}>
                                <div className="bookimage">
                                    <img src={data.thumbnailUrl} title={data.title} alt={data.title} />
                                </div>
                                <div className="bookcardinfo">
                                    <div className="bookscardinfo-no-btns">
                                        <div className="titlerow">
                                            <h2 title={data.title}><strong>{data.title}</strong></h2>
                                            <button title="edit" className="booklistedit" onClick={() => handleeditclick(data.id, data.title)}><img src={edit} alt="edit book" /></button>
                                        </div>
                                        <div>
                                            <p><span>Authors : </span> {data.authors}</p>
                                        </div>
                                        <div>
                                            <p className="categories"><span>Categories :</span> {data.categories}</p>
                                        </div>
                                        <div>
                                            <p><span>Page Count : </span>{data.pageCount}</p>
                                        </div>
                                    </div>
                                    <div className="booklistbtns">
                                        <div>
                                            <button title="Read more >>" onClick={() => readmore(data.id)} className="booklistbtn">Read More &gt;&gt;</button>

                                        </div>
                                        <div>
                                            <button title="Delete" className="booklistremove booklistedit" onClick={() => handleclick(data.id, data.title)}><img src={remove} alt="delete book" /></button>
                                        </div>

                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}
export default Booklist;