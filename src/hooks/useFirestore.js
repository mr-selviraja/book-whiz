import { getDocs, collection, db } from '../config/firebaseConfig';

export const useFirestore = () => {
  const fetchCollection = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const collectionData = [];

      querySnapshot.forEach((doc) => {
        collectionData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return collectionData;
    } catch (error) {
      console.log('Error fetching collections: ', error);
      return [];
    }
  };

  return { fetchCollection };
};
