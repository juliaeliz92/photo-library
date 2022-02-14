import React, { useState, useEffect, Suspense } from 'react';
import { InlineLoading } from 'carbon-components-react';
import Header from './components/Header';
import ImagePagination from './components/Pagination';
import getPhotosServices from './getPhotosServices';
import ErrorBoundary from 'carbon-components-react/lib/components/ErrorBoundary/ErrorBoundary';
import './app.scss';

const ImageList = React.lazy(() => import('./components/Image'));

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState();
  const [pageSize, setPageSize] = useState(10);
  const setPhotoList = async (size, page) => {
    let photoDetails = await getPhotosServices(size, page);
    setTotalItems(photoDetails.total);
    setPhotos(photoDetails.photo);
  };
  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setPhotoList(pageSize, currentPage);
    }, 500);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [pageSize, currentPage]);

  return (
    <div className="App">
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col-lg-16">
            <Header />
          </div>
        </div>
        <Suspense fallback={<InlineLoading description="loading" />}>
          <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <ImageList photos={photos} />
            <div className="bx--row">
              {totalItems && (
                <ImagePagination
                  page={currentPage}
                  totalItems={totalItems}
                  pageSize={pageSize}
                  pageSizes={[5, 10, 15]}
                  onChange={({ page, pageSize }) => {
                    setCurrentPage(page);
                    setPageSize(pageSize);
                  }}
                />
              )}
            </div>
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
