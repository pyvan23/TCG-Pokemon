import React from 'react'

export const AppRouter = () => {
  return (
   
        <>
          <Routes >
            <Route
              path="/login/*"
              element={
                <PublicRoutes>
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoutes>
              }
            />
           
          </Routes>
        </>
  )
}
