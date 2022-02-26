// আজকে ধুমাইয়া API প্রাকটিস করার দিন (রিলিজ হচ্ছে মডিউল ৩৪.৫)

// #module_release #intermediate_js_milestone #module_34_5

// গত দুই দিনের মডিউল। বিশেষ করে গতকালের মডিউল বিভিন্ন এঙ্গেলে আজকে বুঝে নেয়ার দিন । আজকে, API বুঝবে। প্রাকটিস করবে। ভিডিওতে যেগুলা দেখানো হয়েছে সেগুলার বাইরে আরো কিছু জিনিস যোগ করার চেষ্টা করবে। ট্রাই করতে গিয়ে কোন কিছু কাজ না করলে কিছুক্ষণ নিজে নিজে সমস্যার কারণ খুঁজে বের করার চেষ্টা করবে। তারপর না ধরতে পারলে গরূপে পোষ্ট করবে। 





// আজকের মডিউল: 

// আজকের মডিউল তেমন বেশি কিছু নাই। জাস্ট একটা ভিডিও। এই ভিডিওতে কয়েকটা কাজ করতে বলা হয়েছে। সেগুলা ধরে ধরে চেক করবে। প্রাকটিস করবে। 



// .

// API চেকলিস্ট 

// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 

// function getData() {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// getData();

// ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 

// function getData() {
//         fetch("https://jsonplaceholder.typicode.com/comments")
//         .then(res => res.json())
//         .then(data => showComment(data))
//     }
// const showComment =  (comments) => {
//     const commentDiv = document.getElementById('show-comments');
//     for(const comment of comments){
//         console.log(comment);
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <p>${comment.body}</p>
//         `;
//         commentDiv.appendChild(div);
//     }
// }


// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 

// function getData() {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(res => res.json())
//     .then(data => showComment(data))
// }
// getData();
// const showComment =  (comments) => {
// const commentDiv = document.getElementById('show-comments');
// for(const comment of comments){
//     console.log(comment);
//     const div = document.createElement('div');
//     div.innerHTML = `
//         <h2>${comment.name}</h2>
//         <h3>${comment.email}</h3>
//         <p>${comment.body}</p>
//     `;
//     commentDiv.appendChild(div);
//     }
// }

// ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

// const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => showComments(data))
// }
// const showComments = (comments) => {
//     const commentDiv = document.getElementById('show-comments');
//     comments.forEach(comment => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <p>${comment.body}</p>
//         `;
//         commentDiv.appendChild(div);
//     });
// }

// ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 

const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => showComments(data))
}
const showComments = (comments) => {
    const commentDiv = document.getElementById('show-comments');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p onclick ="showDetails('${comment.id}')">${comment.body}</p>
        `;
        commentDiv.appendChild(div);
     });
}

const showDetails = (id) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
}
// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 



// ৭. network ট্যাব একটু ভালো করে দেখো। দরকার হলে। গুগলে সার্চ দিয়ে বা ইউটিউবে ভিডিও দেখে ফেলো। এখন বেশিরভাগ জিনিস বুঝতে না পারলেও দেখে ফেলো। ফিউচারে কাজে লাগবে। 

// .

// ৮. চ্যালেঞ্জ-১

// the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 



// ৯. চ্যালেঞ্জ-২

// দেখো sports db এর জন্য যে ওয়েবসাইট বানাবে সেখানে একটা লোডিং স্পিনার যোগ করতে পারো কিনা। জিনিসটা একটু কঠিন মনে হতে পারে। তাও দেখানোর চেষ্টা করো। এইটা আমরা এক সময় দেখিয়ে দেব। তবে তার আগে তুমি দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।  



// ১০. চ্যালেঞ্জ-৩

// অনলাইন থেকে API খুঁজে বের করো। হয়তো দেখবে API key চায়। সেটা কিভাবে করবে বুঝতে পারবে না। টেনশন এর কিছু নাই। আমরা সেগুলা দেখিয়ে দিবো ফিউচারে। তারপরেও দেখো কোন API খুঁজে পাও কিনা। এবং সে API ইউজ করতে পারো কিনা।



// .

// উপরের লিষ্টের মোটামুটি ৭ টা কাজ তোমাকে করে ফেলতে হবে। বাকি তিনটা কাজ দেখো কতটুকু করতে পারো। 

// .



// API নিয়ে কনফিউশন? 

// কনফিউশন তো থাকবেই। কনফিউশন লার্নিং প্রসেস এর একটা অংশ। তুমি কনফিউজড হবেই। কনফিউজড হওয়া মানে তুমি শেখার চেষ্টা করতেছো। বুঝার চেষ্টা করতেছো। হয়তো পুরা জিনিসটা এখনো ক্লিয়ার হয়নি। সেটা হয়ে যাবে। কারণ API আমরা এখানেই শেষ করবো না। সামনে প্রচুর API ইউজ করবো। শুধু মানুষের দেয়া API ইউজ করবো না। বরং একটা সময় পর আমরা নিজেরাই API তৈরি করে সেটা ইউজ করা শুরু করবো। 



// .

// এছাড়াও API এখান থেকে ক্লিয়ার না হলে। যেকোন সময় তুমি গুগলে সার্চ দিতে পারো। যেকোন সময় তুমি আমাদের গরূপে প্রশ্ন করতে পারো। সাপোর্ট সেশনে গিয়ে প্রশ্ন করতে পারো। আমাদের কন্সেপচুয়াল সেশনে জয়েন করতে পারো। বোনাস কনটেন্ট এ রিকুয়েস্ট করতে পারো। সো, শেখার ইচ্ছা বা ধৈর্য্য থাকলে আমাদের কাছ থেকে বা গুগল /ইউটিউব এর কাছ থেকে বের করে নেয়ার অনেক অনেক সুযোগ আছে। 



// .



// চৌধুরী সাহেব, 

// আজ আমরা গরিব বলে-- আপনার API ইউজ করতেছি। আর আপনি জায়গামতো cors এরর বসিয়ে দিলেন। 

// মনে রাখবেন চৌধুরী, 

// আর দেড় মাস পরে আমি নিজে API ক্রিয়েট করবো। 

// তখন আপনাকে আর আপনার মেয়েকে (ছেলেকে) ৪০৪ স্ট্যাটাস দিয়ে দিবো।

