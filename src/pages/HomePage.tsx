import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProducts } from '../api/productApi';
import { addFavorite } from '../redux/slices/favoritesSlice';

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ marginBottom: '20px' }}>
        Explore Products ✨
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '12px',
          width: '300px',
          borderRadius: '10px',
          border: 'none',
          marginBottom: '30px',
          outline: 'none',
        }}
      />
      {toast && (
  <div
    style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#22c55e',
      color: 'white',
      padding: '14px 20px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      zIndex: 999,
      fontWeight: 'bold',
    }}
  >
    {toast}
  </div>
)}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: '#1e293b',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />

            <h3 style={{ marginTop: '15px' }}>
              {product.title}
            </h3>

            <p style={{ color: '#cbd5e1' }}>
              ${product.price}
            </p>

            <button
              onClick={() => {
  dispatch(addFavorite(product));

  setToast(`${product.title} added to favorites ❤️`);

  setTimeout(() => {
    setToast('');
  }, 2000);
}}
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#3b82f6',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;