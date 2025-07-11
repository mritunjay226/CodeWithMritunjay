import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

const Admin = () => {
  return (
    <div className="p-6">
      <SignedIn>
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <ProjectForm />
        <BlogForm />
      </SignedIn>

      <SignedOut>
        <div className="text-center mt-20">
          <p className="mb-4 text-lg">Please sign in to access admin panel</p>
          <SignInButton mode="modal" />
        </div>
      </SignedOut>
    </div>
  );
};
