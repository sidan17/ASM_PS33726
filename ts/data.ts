type TGymMember = { id:number; name:string; phone:string; gender:TGender }
type TGender = string | boolean;
type TWorkout = { id:number; workoutName: string; startDate: string; notes:string }
type TEnrollment = TGymMember & TWorkout;
type TGymBranch = { id:number; name:string; address:string; image:string }

const workout_arr:TWorkout[] = [
    {id:1, workoutName:"Strength Training", startDate:"2022-04", notes:"High intensity workout"},
    {id:2, workoutName:"Cardio Blast", startDate:"2022-09", notes:"Burn calories fast"},
    {id:3, workoutName:"Yoga Flow", startDate:"2023-01", notes:"Improve flexibility and balance"},
    {id:4, workoutName:"HIIT", startDate:"2023-04", notes:"High intensity interval training"},
    {id:5, workoutName:"Pilates", startDate:"2023-09", notes:"Core strength and flexibility"},
    {id:6, workoutName:"CrossFit", startDate:"2024-01", notes:"Full body workout"},
];

let gymMembers_arr:TEnrollment[] = [
    {id:1, name:"John Doe", phone:"918123456", gender:"Male", workoutName:"Yoga Flow", startDate:"2023-01", notes:"Enjoys calm workouts"},
    {id:2, name:"Jane Smith", phone:"914123451", gender:true, workoutName:"Cardio Blast", startDate:"2022-09", notes:"Loves intense cardio"},
    {id:3, name:"Emily Davis", phone:"938123461", gender:"Female", workoutName:"HIIT", startDate:"2023-04", notes:"Focuses on endurance"},
    {id:4, name:"Michael Brown", phone:"112345632", gender:false, workoutName:"CrossFit", startDate:"2024-01", notes:"Prefers strength training"},
    {id:5, name:"Chris Johnson", phone:"42125690", gender:"Male", workoutName:"Pilates", startDate:"2023-09", notes:"Great at core exercises"},
    {id:6, name:"Sophia Lee", phone:"52169036", gender:"Female", workoutName:"Strength Training", startDate:"2022-04", notes:"Very competitive"},
];

const gymBranches_arr:TGymBranch[] = [
    { id:1, name:"Ho Chi Minh Gym", address: "QTSC9 Building, To Ky, Tan Chanh Hiep Ward, District 12, HCM", image: "images/hcm.jpeg"},
    { id:2, name:"Hanoi Gym", address: "13 Trinh Van Bo Street, Phuong Canh Ward, Nam Tu Liem District, Hanoi", image: "images/hn.jpg"},
    { id:3, name:"Da Nang Gym", address: "219 Nguyen Sinh Sac, Hoa Minh Ward, Lien Chieu District, Da Nang", image: "images/dn.webp"},
    { id:4, name:"Can Tho Gym", address: "22 Street, Thuong Thanh Ward, Cai Rang District, Can Tho", image: "images/ct.jpg"},
    { id:5, name:"Hai Phong Gym", address: "271 Le Thanh Tong, May Chai Ward, Ngo Quyen District, Hai Phong", image: "images/hp.jpg"},
    { id:6, name:"Thai Nguyen Gym", address: "De Mo Bach, Quyet Thang Ward, Thai Nguyen", image: "images/tn.jpg"}
];

export { TGymBranch, TEnrollment, TGymMember, TWorkout, TGender }
export { gymMembers_arr, gymBranches_arr, workout_arr }
