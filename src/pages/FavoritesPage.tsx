import { useSelector, useDispatch } from 'react-redux';

import { removeFavorite } from '../redux/slices/favoritesSlice';

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: any) => state.favorites.items
  );

  const dispatch = useDispatch();

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ marginBottom: '30px' }}>
        Favorite Products ❤️
      </h1>

      {favorites.length === 0 ? (
        <p>No favorites added</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {favorites.map((product: any) => (
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
                onClick={() =>
                  dispatch(removeFavorite(product.id))
                }
                style={{
                  marginTop: '10px',
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;