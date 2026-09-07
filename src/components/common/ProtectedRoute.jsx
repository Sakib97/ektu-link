const ProtectedRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default ProtectedRoute;
