import { useState } from 'react';
import './AddProduct.css';
import upload_icon from '../../Pages/Admin/assets/upload_area.svg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const AddProduct = () => {
 


  const [form, setForm] = useState({});

    const dispatch = useDispatch();
    const items = useSelector(state => state);
    const nextId = items.length + 1;

    function handleadd(e) {
      if (e.target.name === 'image') {
        setForm({ ...form, image: e.target.files[0] });
      } else {
        setForm({ ...form, [e.target.name]: e.target.value });
      }    }

    function AddProduct(e) {
        e.preventDefault();
        const newItem = { ...form, id: nextId };
        axios.post('http://localhost:8001/products', newItem).then(response => {
            dispatch({ type: 'ADD_PRODUCT', payload: response.data })})  
                alert("ss")
            }
    

  return (
    <div className='addproduct'>
      <div className='addproduct-itemfield'>
        <p>Product title</p>
        <input
          
          onChange={handleadd}
          type='text'
          name='name'
          placeholder='Type here'
        />
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input
            
            onChange={handleadd}
            type='text'
            name='old_price'
            placeholder='Type here'
          />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input
            
            onChange={handleadd}
            type='text'
            name='new_price'
            placeholder='Type here'
          />
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select
          onChange={handleadd}
          name='category'
          className='addproduct-selector'
        >
          <option value='women'>Women</option>
          <option value='men'>Men</option>
          <option value='kid'>Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
  <label htmlFor="file-input">
    <img
      src={form.image instanceof File ? URL.createObjectURL(form.image) : upload_icon}
      className="addproduct-thumnail-img"
      alt=""  
    />
  </label>
  <input onChange={handleadd} type="file" name="image" id="file-input" hidden />
</div>

      <button onClick={AddProduct} className='addproduct-btn'>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
