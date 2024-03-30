import React from 'react';
import Button from "../ui/Button";
import toast, { ToastBar, Toaster } from 'react-hot-toast';

export default function ToasterNotify() {
    return (
        <Toaster  position="top-center" gutter={12} containerStyle={{ margin: "8px"}} toastOptions={{
            success: {
              duration: 3000,
            },

            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)"
            }
          }} >
            {(t) => (
              <ToastBar toast={t}>
                {({ icon, message }) => (
                  <>
                    {icon}
                    {message}
                    {t.type !== 'loading' && (
                      <Button size="small" onClick={() => toast.dismiss(t.id)}>X</Button>
                    )}
                  </>
                )}
              </ToastBar>
            )}
        </Toaster>
    )
}
