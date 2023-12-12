import { useEffect, useState } from "react";
import '../styles/booklist.css';
import { useNavigate, useLocation } from "react-router-dom";
import remove from '../../src/images/remove32.png'
import edit from '../../src/images/edit.png'

const Booklist = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let [books, setBooks] = useState([
        {
            id: 1,
            title: 'Book 1',
            authors: 'Author 1',
            categories: 'Category 1',
            pageCount: 200,
            shortDescription: 'Short description for Book 1',
            thumbnailUrl: 'https://example.com/book1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            authors: 'Author 2',
            categories: 'Category 2',
            pageCount: 300,
            shortDescription: 'Short description for Book 2',
            thumbnailUrl: 'https://example.com/book2.jpg',
        },
        // Add more dummy data as needed
    ]);


    // useEffect(() => {
    //     let fetchData = async () => {
    //         let response = await fetch('http://localhost:3000/books');
    //         // let response = await fetch('https://darskp.github.io/books-json/books.json');
    //         let data = await response.json();
    //         // console.log(data);
    //         setBooks(data);
    //     }
    //     fetchData();
    // }, [books]);



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