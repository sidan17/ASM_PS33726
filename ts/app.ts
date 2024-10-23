import { TGymBranch, TEnrollment, TGymMember, TWorkout, TGender } from './data.js';
import { gymMembers_arr, gymBranches_arr, workout_arr } from './data.js';

const hien1Workout = (workout: TWorkout) => {
    return `<div>
     <h4>Tên bài tập: ${workout.workoutName} </h4>
     <p>Ngày bắt đầu: ${workout.startDate}</p>
     <p>Ghi chú: ${workout.notes}</p>
    </div>`;
};

export const showlistworkouts = () => {
    const html_arr = workout_arr.map(hien1Workout); // call back
    return html_arr.join("");
};

const genderDisplay = (gender: TGender) => {
    if (typeof gender == 'boolean') {
        return gender ? "Nữ" : "Nam";
    }
    return gender as string;
};

const hien1GymMember = (member: TEnrollment) => {
    return `<div>
     <h4>Họ tên: ${member.name} </h4>
     <p>Điện thoại: ${member.phone}</p>
     <p>Giới tính: ${genderDisplay(member.gender)}</p>
     <p>Bài tập: ${member.workoutName}</p>
     <p>Ghi chú: ${member.notes}</p>
    </div>`;
};

export const showlistgymmembers = () => {
    const html_arr = gymMembers_arr.map(hien1GymMember);
    return html_arr.join("");
};

const hien1GymBranch = (branch: TGymBranch) => {
    return `<div>
     <img src="${branch.image}" alt="${branch.name}">
     <h4>${branch.name} </h4>
     <p>${branch.address}</p>
    </div>`;
};

export const showlistgymbranches = () => {
    const html_arr = gymBranches_arr.map(hien1GymBranch);
    return html_arr.join("");
};

const show1Brand = (brand: any) => {
    return `<div>${brand.ten}</div>`;
};

// Function to fetch and display travel brands from an API
export const showlistbrands = async () => {
    try {
        const response = await fetch("http://localhost:3000/thuong_hieu");
        if (!response.ok) throw new Error("Network response was not ok");

        const brand_arr = await response.json();
        let str = '';
        brand_arr.forEach(brand => str += show1Brand(brand));
        return str;
    } catch (error) {
        console.error("Error fetching travel brands:", error);
        return `<p>Unable to fetch travel brands at this moment.</p>`;
    }
};
