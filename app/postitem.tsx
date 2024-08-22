
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icone from 'react-native-vector-icons/MaterialIcons';

const CartItem = (props :any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isComment, setIsComment] = useState<boolean>(false);
  const [itemComments, setItemComments] = useState<string[]>([]);
  const  [commentText, setCommentText] = useState("");
  const [liked, setLiked] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleCommentBox = () => {
    setIsVisible(!isVisible);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    // Handle comment logic here, e.g., show a modal or navigate to a comment screen
   // console.log('Comment:', comment);
   var comments=itemComments;
   comments.push(commentText);
   setItemComments(comments)
  };

  return (
    <View style={styles.container}>
     
    <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={handleLike} style={styles.button}>
          <Icone name={liked ? 'favorite' : 'favorite-border'} size={27} color={liked ? 'red' : 'gray'} />
          {/* <AntDesign name="hearto" size={24} color="gray"  selectionColor={1==1 ? 'red' : 'gray'}/> */}
         </TouchableOpacity>
        
         <TouchableOpacity onPress={toggleCommentBox} style={styles.button}>
           {/* <Icon name='comment' size={24} color='gray' /> */}
           <FontAwesome name="comment-o" size={24} color="gray" />
         </TouchableOpacity>
       </View>
       {
      isVisible && <View  style={styles.commentInputContainer}>
      <TextInput  style={styles.input}  onChange={(e)=>setCommentText(e.target.value)}/>   
      <TouchableOpacity onPress={toggleVisibility} style={styles.commentButton}>
     
      <Icon.Button
      name="forward"
      backgroundColor="gray"
      onPress={handleComment}
    >
     
      {/* Comment */}
    </Icon.Button>
         </TouchableOpacity> 
        
    </View>
    }
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     borderStyle:"solid",
    borderColor:"gray"
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    height:100,
    borderStyle:"solid",
    borderColor:"gray",

  },
  inputView: {
    width: "80%",
    backgroundColor: "",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
},
inputText: {
    height: 50,

},
input: {
  height: 60,
  marginHorizontal: 12,
  borderWidth: 1,
  padding: 10,
  width:"90%"
},
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignContent:"flex-start",
    textAlign:"left"
  },
  commentInputContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignContent:"flex-start",
     borderStyle:"solid",
     alignSelf: 'stretch',
     textAlign: 'center',
     width:"100%"
    // borderColor:"gray"
  },
  button: {
    marginHorizontal: 8,
  },
  commentButton: {
    marginHorizontal: 8,
    height:20,
    backgroundColor:"purple",
    color:"#fff",
    margin:5,
  },
});

export default CartItem;


// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// interface CartItemProps {
//   itemName: string;
//   itemPrice: number;
// }

// const CartItem: React.FC<CartItemProps> = ({ itemName, itemPrice }) => {
//   const [liked, setLiked] = useState<boolean>(false);
//   const [isComment, setIsComment] = useState<boolean>(false);
//   const [comment, setComment] = useState<string>('');

//   const handleLike = () => {
//     setLiked(!liked);
//   };

//   const handleComment = () => {
//     // Handle comment logic here, e.g., show a modal or navigate to a comment screen
//     console.log('Comment:', comment);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.itemName}>{itemName}</Text>
//       <Text style={styles.itemPrice}>${itemPrice.toFixed(2)}</Text>
      
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity onPress={handleLike} style={styles.button}>
//           <Icon name={liked ? 'favorite' : 'favorite-border'} size={24} color={liked ? 'red' : 'gray'} />
//         </TouchableOpacity>
        
//         <TouchableOpacity onPress={()=>setIsComment(true)} style={styles.button}>
//           <Icon name='comment' size={24} color='gray' />
//         </TouchableOpacity>
//       </View>
//       <TextInput
//           style={styles.inputText}
//           placeholder="Email..."
//           placeholderTextColor="#003f5c"
//         />
//       {/* Example text input for comment */}
//       <Text style={styles.commentInput} onPress={() => console.log('Open comment input')}>
//         {comment ? 
//           'comment'
        
//         : 'Tap to add a comment'}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   itemName: {
//     fontSize: 18,
//     flex: 1,
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: '#888',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginLeft: 'auto',
//   },
//   button: {
//     marginHorizontal: 8,
//   },
//   commentInput: {
//     marginTop: 8,
//     color: 'blue',
//   },
//   inputText: {
//     height: 50,

// },
// });

// export default CartItem;
