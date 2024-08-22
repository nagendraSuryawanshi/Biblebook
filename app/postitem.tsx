
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
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
   console.log("comments",comments)
   setCommentText("");
  };

  
  return (
    <View style={styles.cartcontainer}>
     <FlatList 
        data={itemComments}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.comments}>
            <Text style={styles.title}>{item}</Text>           
           
          </View>
        )}
        /> 
        <View >
            <Text style={styles.title}>{itemComments.length} comments</Text>           
           
          </View>
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
      <TextInput  style={styles.input}  
        placeholder="Type here to comment!"
        onChangeText={newText => setCommentText(newText)}
        value={commentText}
        defaultValue={commentText}
        />   
      <TouchableOpacity onPress={toggleVisibility} style={styles.commentButton}>
     
      <Icon.Button style={styles.commentbutton}
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
  cartcontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
     borderStyle:"solid",
    borderColor:"gray",
    paddingLeft:10,
    marginTop:10

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
  height: 80,
  marginHorizontal: 12,
  borderWidth: 1, 
  width:"80%"
},
  buttonContainer: {
    flexDirection: 'row',
    // marginLeft: 'auto',
    alignContent:"flex-start",
    justifyContent:"flex-start",
    textAlign:"left",
    marginTop:10
  },
  commentInputContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignContent:"flex-start",
    justifyContent:"flex-start",
     borderStyle:"solid",
     alignSelf: 'stretch',
     textAlign: 'center',
     width:"100%"
    // borderColor:"gray"
  },
  commentbutton:{
height:50
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
  comments:{
    backgroundColor:"rgba(221,221,221,1.00)",
    borderBlockColor:"rgba(221,221,221,1.00)",
    borderRadius:6,
    paddingBottom:10,
    marginBottom:5,
  },
  title:{

  }
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
