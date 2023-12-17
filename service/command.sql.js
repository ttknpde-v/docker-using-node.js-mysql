class CommandSql {
    static readsRomance = 'select * from romance';
    static createRomance = 'insert into romance(rid,title,price) values (?,?,?)';
    static updateRomance = 'update romance set title = ? , price = ? where rid = ?';
    static deleteRomance = 'delete from romance where rid = ?';

}
export default CommandSql