import React, { useState } from 'react';
import styles from '../styles/TambahBuku.module.css';

const TambahBuku = () => {
    const [formData, setFormData] = useState({
        isbn: '',
        title: '',
        category: '',
        author: '',
        price: '',
        stock: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kirim data buku ke server atau lakukan tindakan sesuai kebutuhan
        console.log(formData);
    };

    return (
        <div className={styles.container}>
        <h1 className={styles.h1}>Tambah Buku</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
            <label className={styles.label}>ISBN:</label>
            <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                required
                className={styles.inputField}
            />
            </div>
            <div className={styles.formGroup}>
            <label className={styles.label}>Judul:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className={styles.inputField}
            />
            </div>
            <div className={styles.formGroup}>
            <label className={styles.label}>Kategori:</label>
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className={styles.inputField}
            />
            </div>
            <div className={styles.formGroup}>
            <label className={styles.label}>Penulis:</label>
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className={styles.inputField}
            />
            </div>
            <div className={styles.formGroup}>
            <label className={styles.label}>Harga:</label>
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className={styles.inputField}
            />
            </div>
            <div className={styles.formGroup}>
            <label className={styles.label}>Stok:</label>
            <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                className={styles.inputField}
            />
            </div>
            <button type="submit" className={styles.submitButton}>
            Tambahkan Buku
            </button>
        </form>
        </div>
    );
};

export default TambahBuku;
