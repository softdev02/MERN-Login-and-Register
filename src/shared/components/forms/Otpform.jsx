import OtpInput from 'react-otp-input';
import {Modal, ModalContent, ModalHeader, ModalBody, Button} from "@nextui-org/react";
const Otpform=(props)=>{
    const {isOpen,onClose,otp, setOtp,userregister}=props;
    return(
        <>
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} isDismissable={false} placement={"bottom"}>
         <ModalContent>
           {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-sm lg:text-lg">OTP Send to your email</ModalHeader>
              <ModalBody>
              <form onSubmit={userregister}>
                <div className="flex justify-center">
                  <div>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props}/>}
                      isInputNum={true}
                      inputStyle={{
                        border: "1px solid gray",
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "blue"
                      }}
                    />

                  <div className="flex justify-center items-center mt-3">
                  
                      <Button color="primary" type='submit'>
                        Verify
                      </Button>
                   
                
                  </div>
                  </div>
              </div>
            </form>
              </ModalBody>
          
            </>
          )}
        </ModalContent>
      </Modal>
        </>
    )
}
export default Otpform;