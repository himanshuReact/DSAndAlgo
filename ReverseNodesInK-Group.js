
var reverseKGroup = function(head, k) {
    
     if(head === null){
        return null;
    }
    
    let temp = head
    let prev = null;
    let next;
    let count = 0
    
    while(temp && count<k){
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next
        count++
    }
    
    
    if (next !== null)
        head.next = reverseKGroup(next, k);
 
    /* prev is new head of the input list */
    return prev;
    
    
    
};
