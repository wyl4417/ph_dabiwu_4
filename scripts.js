// script.js

// 参赛者数据（通常这些数据会从服务器获取，但这里我们直接在代码中定义）
const participants = [
    { department: 'EBG - Storage', id: '00574695', name: '符纯浩', group: 'A1', bu: 'Solution', time: '9:00-9:30' },
    { department: 'Network', id: '00824709', name: 'Armaine Valdez', group: 'A10', bu: 'Solution', time: '3:30-4:00' },
    { department: 'EBG - Datacom', id: '00559181', name: 'Joshua Emmanuel Neric', group: 'A11', bu: 'Solution', time: '4:00-4:30' },
    { department: 'Wireless & Core', id: '00895438', name: '白维健', group: 'A12', bu: 'Solution', time: '4:30-5:00' },
    { department: 'Service', id: '00448039', name: '马彬', group: 'A13', bu: 'Solution', time: '5:00-5:30' },
    { department: 'Service', id: '00401566', name: '宗骏骁', group: 'A14', bu: 'Solution', time: '5:30-6:00' },
    { department: 'Wireless & Core', id: '00803266', name: '胡小峰', group: 'A2', bu: 'Solution', time: '9:30-10:00' },
    { department: 'Network', id: '00831405', name: 'Julie Ann Yazon', group: 'A3', bu: 'Solution', time: '10:00-10:30' },
    { department: 'Service', id: '00647670', name: 'Mark Deneb Escat', group: 'A4', bu: 'Solution', time: '10:30-11:00' },
    { department: 'Wireless & Core', id: '00820456', name: 'Anallen Miciano', group: 'A5', bu: 'Solution', time: '11:00-11:30' },
    { department: 'Network', id: '00521048', name: '王日上', group: 'A6', bu: 'Solution', time: '11:30-12:00' },
    { department: 'Wireless & Core', id: '00467290', name: '宋炜', group: 'A7', bu: 'Solution', time: '2:00-2:30' },
    { department: 'Network', id: '00348986', name: 'Marc Lemuel L Angeles', group: 'A8', bu: 'Solution', time: '2:30-3:00' },
    { department: 'Wireless & Core', id: '00533541', name: '陈子羽', group: 'A9', bu: 'Solution', time: '3:00-3:30' },
    { department: 'EBG - Optical', id: '00648144', name: '田佳辉', group: 'B1', bu: 'Solution', time: '9:00-9:30' },
    { department: 'Service', id: '00831374', name: 'Adrian Daruel Adriano', group: 'B10', bu: 'Solution', time: '3:30-4:00' },
    { department: 'EBG - Storage', id: '00662644', name: 'Jocelyn Bailon', group: 'B11', bu: 'Solution', time: '4:00-4:30' },
    { department: 'Wireless & Core', id: '84278634', name: 'Lau Guan Hong', group: 'B12', bu: 'Solution', time: '4:30-5:00' },
    { department: 'EBG - Datacom', id: '00600328', name: '花静怡', group: 'B13', bu: 'Solution', time: '5:00-5:30' },
    { department: 'Wireless & Core', id: '00406582', name: '刘宁', group: 'B2', bu: 'Solution', time: '9:30-10:00' },
    { department: 'Network', id: '00771311', name: '李德盛', group: 'B3', bu: 'Solution', time: '10:00-10:30' },
    { department: 'Service', id: '00824736', name: 'Kristel Joy Flores', group: 'B4', bu: 'Solution', time: '10:30-11:00' },
    { department: 'Wireless & Core', id: '00755985', name: 'Nikky Adams A Termulo', group: 'B5', bu: 'Solution', time: '11:00-11:30' },
    { department: 'Network', id: '00832514', name: '陈勇', group: 'B6', bu: 'Solution', time: '11:30-12:00' },
    { department: 'Wireless & Core', id: '00482073', name: 'Christianne Hazelle Lopez', group: 'B7', bu: 'Solution', time: '2:00-2:30' },
    { department: 'Network', id: '00821982', name: 'Vince Andrei Hu', group: 'B8', bu: 'Solution', time: '2:30-3:00' },
    { department: 'Wireless & Core', id: '00421175', name: '于璟泽', group: 'B9', bu: 'Solution', time: '3:00-3:30' },
    { department: 'Globe', id: '00518677', name: '邱绍彬', group: 'A1', bu: 'Account', time: '9:00-9:30' },
    { department: 'Globe', id: '00566655', name: '陈博文', group: 'A10', bu: 'Account', time: '3:30-4:00' },
    { department: 'Globe', id: '00327568', name: 'Rannilo L Asi Jr', group: 'A11', bu: 'Account', time: '4:00-4:30' },
    { department: 'PLDT', id: '00456226', name: '王晨', group: 'A12', bu: 'Account', time: '4:30-5:00' },
    { department: 'PLDT', id: '00452604', name: '朱泽梁', group: 'A13', bu: 'Account', time: '5:00-5:30' },
    { department: 'PLDT', id: '00585675', name: '朱福安', group: 'A2', bu: 'Account', time: '9:30-10:00' },
    { department: 'Globe', id: '00590573', name: '傅丹毅', group: 'A3', bu: 'Account', time: '10:00-10:30' },
    { department: 'PLDT', id: '00570623', name: '郑渝', group: 'A4', bu: 'Account', time: '10:30-11:00' },
    { department: 'PLDT', id: '00883178', name: 'Meghan Gesmundo Pinana', group: 'A5', bu: 'Account', time: '11:00-11:30' },
    { department: 'Globe', id: '00595946', name: '郑传栖', group: 'A6', bu: 'Account', time: '11:30-12:00' },
    { department: 'DITO', id: '00428568', name: '王欢欢', group: 'A7', bu: 'Account', time: '2:00-2:30' },
    { department: 'Globe', id: '00622892', name: '戴娇', group: 'A8', bu: 'Account', time: '2:30-3:00' },
    { department: 'DITO', id: '00423471', name: '冯天奇', group: 'A9', bu: 'Account', time: '3:00-3:30' },
    { department: 'Globe', id: '00511044', name: '陈仕豪', group: 'B1', bu: 'Account', time: '9:00-9:30' },
    { department: 'PLDT', id: '00527890', name: '孟庆雯', group: 'B10', bu: 'Account', time: '3:30-4:00' },
    { department: 'Globe', id: '00559182', name: 'Jaycerine Rizel O Tan', group: 'B11', bu: 'Account', time: '4:00-4:30' },
    { department: 'PLDT', id: '00589471', name: '朱敬烽', group: 'B12', bu: 'Account', time: '4:30-5:00' },
    { department: 'Tower', id: '00624834', name: '陈舒倩', group: 'B2', bu: 'Account', time: '9:30-10:00' },
    { department: 'Globe', id: '00625790', name: '林少煌', group: 'B3', bu: 'Account', time: '10:00-10:30' },
    { department: 'PLDT', id: '00806207', name: '于俊杰', group: 'B4', bu: 'Account', time: '10:30-11:00' },
    { department: 'Tower', id: '00832167', name: 'Kim Janico Aguilar', group: 'B5', bu: 'Account', time: '11:00-11:30' },
    { department: 'Globe', id: '00833918', name: '谭宁', group: 'B6', bu: 'Account', time: '11:30-12:00' },
    { department: 'DITO', id: '00855939', name: '林思博', group: 'B7', bu: 'Account', time: '2:00-2:30' },
    { department: 'PLDT', id: '00544891', name: '刘佳晨', group: 'B8', bu: 'Account', time: '2:30-3:00' },
    { department: 'Globe', id: '00452644', name: '程曦', group: 'B9', bu: 'Account', time: '3:00-3:30' }
];


document.getElementById('participantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const id = document.getElementById('id').value.trim();
    
    // 查找参赛者
    const participant = participants.find(p => p.id === id);
    
    const resultDiv = document.getElementById('result');
    
    if (participant) {
        // 显示结果
        resultDiv.textContent = `Hi，${participant.name}，You have been assigned to group ${participant.bu} ${participant.group} 。Your presentation is at ${participant.time}。`;
    } else {
        // 显示未找到
        resultDiv.textContent = 'Participant not found. Please check the ID';
    }
});

