import Text "mo:base/Text";
import Principal "mo:base/Principal";
actor {
  public query ({caller}) func get_owner(name: Text) : async Principal{
    let owner_id = caller;
    let owner_name = name;

    return owner_id
  }
};