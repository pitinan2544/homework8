function mergeObjects(...objects) {
    // สร้าง Object ใหม่เพื่อเก็บผลลัพธ์
    let result = {};
  
    // วนลูปผ่านทุก Object ที่รับมา
    for (let obj of objects) {
      // วนลูปผ่านทุก key ใน Object ปัจจุบัน
      for (let key in obj) {
        // ถ้า key ยังไม่มีใน Object ผลลัพธ์ หรือ Object ผลลัพธ์ยังไม่มี key
        // ให้เพิ่ม key และ value ลงใน Object ผลลัพธ์
        if (!(key in result)) {
          result[key] = obj[key];
        }
      }
    }
  
    return result;
  }
  
  // ทดสอบ
  let obj1 = { name: "Andy", age: 25 };
  let obj2 = { gender: "M", age: 30 };
  let obj3 = { name: "Bobby", age: 35 };
  
  console.log(mergeObjects(obj1, obj2, obj3));  
  console.log(mergeObjects(obj2, obj3, obj1));  
  