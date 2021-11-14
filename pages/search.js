import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from 'next/link'
const Search = () => {

   const [pickup, setPickup] = useState("");
   const [dropoff, setDropoff] = useState("");


  return (
    <Wrapper>
      <ButtonContainer>
          <Link href="/">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios-filled/50/9CA3AF/vertical-line.png" />
          <Square src="data:image/jpeg;base64,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" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup Location" 
          value={pickup}
          onChange={(e)=> setPickup(e.target.value)}
          />
          <Input placeholder="where to ? "
          value={dropoff}
          onChange={(e)=> setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" />
      </InputContainer>
      <SavedPlaces>
          <StarIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png" />
          Saved Places
      </SavedPlaces>
      <Link href={{

          pathname: "/confirm",
          query: {
                     pickup: pickup,
                     dropoff: dropoff
          }
      }}>
     <ConfirmButtonContainer>
         Confirm Locations
     </ConfirmButtonContainer>
     </Link>
    </Wrapper>
  );
};

export default Search;
const ConfirmButtonContainer = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl
cursor-pointer
`
const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4
`;
const BackButton = tw.img`
h-12 cursor-pointer
`;
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`;

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`;

const Circle = tw.img`
h-2.5
`;

const Line = tw.img`h-10`;

const Square = tw.img`h-3`;

const InputBoxes = tw.div`
flex flex-col flex-1
`;

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`w-10 h-10 bg-gray-200
rounded-full ml-3
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`